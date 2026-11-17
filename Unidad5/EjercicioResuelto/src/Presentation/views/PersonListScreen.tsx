import { useMemo, useState } from 'react';
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { container, TYPES } from '../../core/container';
import type { PersonUIModel } from '../models/PersonUIModel';
import { PersonListViewModel } from '../viewmodels/PersonListViewModel';

interface DepartmentFilterOption {
  readonly id: string;
  readonly name: string;
  readonly color: string;
}

function getInitials(firstName: string, lastName: string): string {
  return `${firstName.trim()[0] ?? ''}${lastName.trim()[0] ?? ''}`.toUpperCase();
}

export function PersonListScreen() {
  const viewModel = useMemo(
    () => container.get<PersonListViewModel>(TYPES.PersonListViewModel),
    [],
  );

  const [loadState] = useState<
    | { people: readonly PersonUIModel[]; departmentsCount: number; error: null }
    | { people: null; departmentsCount: number; error: string }
  >(() => {
    try {
      const people = viewModel.load();
      return {
        people,
        departmentsCount: viewModel.departmentsCount,
        error: null,
      };
    } catch (error) {
      return {
        people: null,
        departmentsCount: 0,
        error: error instanceof Error ? error.message : 'No se pudo cargar el listado de personas.',
      };
    }
  });

  const [selectedDepartmentId, setSelectedDepartmentId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const allPeople = useMemo(() => loadState.people ?? [], [loadState.people]);

  const departmentOptions = useMemo<readonly DepartmentFilterOption[]>(() => {
    const map = new Map<string, DepartmentFilterOption>();
    for (const person of allPeople) {
      if (!map.has(person.departmentId)) {
        map.set(person.departmentId, {
          id: person.departmentId,
          name: person.departmentName,
          color: person.departmentColor,
        });
      }
    }
    return Array.from(map.values());
  }, [allPeople]);

  const filteredPeople = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return allPeople.filter((person) => {
      const matchesDepartment =
        selectedDepartmentId === null || person.departmentId === selectedDepartmentId;

      if (!matchesDepartment) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      return (
        person.fullName.toLowerCase().includes(normalizedQuery) ||
        person.departmentName.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [allPeople, searchQuery, selectedDepartmentId]);

  const hasActiveFilters = selectedDepartmentId !== null || searchQuery.trim().length > 0;

  const clearFilters = () => {
    setSelectedDepartmentId(null);
    setSearchQuery('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={filteredPeople}
        keyExtractor={(person) => person.id}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View style={styles.header}>
            <View style={styles.topBar}>
              <Text style={styles.brandText}>DIRECTORIO</Text>
              <View style={styles.topMetrics}>
                <Text style={styles.topMetricText}>
                  {filteredPeople.length} PERSONAS · {loadState.departmentsCount} DEPTOS
                </Text>
              </View>
            </View>

            <View style={styles.heroBlock}>
              <Text style={styles.title}>Equipo y{'\n'}Departamentos</Text>
              <Text style={styles.subtitle}>
                Listado minimalista de personal. Cada fila muestra el color vivo asignado a su departamento.
              </Text>

              <View style={styles.heroActions}>
                <Pressable
                  onPress={clearFilters}
                  style={({ pressed }) => [
                    styles.outlineButton,
                    !hasActiveFilters && styles.outlineButtonActive,
                    pressed && styles.pressed,
                  ]}>
                  <Text
                    style={[
                      styles.outlineButtonText,
                      !hasActiveFilters && styles.outlineButtonTextActive,
                    ]}>
                    VER TODOS ({allPeople.length})
                  </Text>
                </Pressable>

                <View style={styles.searchBox}>
                  <TextInput
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholder="Buscar persona o departamento..."
                    placeholderTextColor="#7E7D78"
                    style={styles.searchInput}
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                  />
                  {searchQuery.length > 0 && (
                    <Pressable onPress={() => setSearchQuery('')} style={styles.clearLink}>
                      <Text style={styles.clearLinkText}>BORRAR</Text>
                    </Pressable>
                  )}
                </View>
              </View>
            </View>

            <View style={styles.filtersRow}>
              {departmentOptions.map((department) => {
                const isSelected = selectedDepartmentId === department.id;
                return (
                  <Pressable
                    key={department.id}
                    onPress={() =>
                      setSelectedDepartmentId(isSelected ? null : department.id)
                    }
                    style={({ pressed }) => [
                      styles.departmentChip,
                      {
                        backgroundColor: isSelected ? department.color : '#FFFFFF',
                        borderColor: department.color,
                      },
                      pressed && styles.pressed,
                    ]}>
                    <View
                      style={[
                        styles.chipColorDot,
                        { backgroundColor: isSelected ? '#FFFFFF' : department.color },
                      ]}
                    />
                    <Text
                      style={[
                        styles.departmentChipText,
                        { color: isSelected ? '#FFFFFF' : '#181816' },
                      ]}>
                      {department.name}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderName}>NOMBRE Y APELLIDOS</Text>
              <Text style={styles.tableHeaderDepartment}>DEPARTAMENTO</Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View style={[styles.personRow, { backgroundColor: item.departmentColor }]}>
            <View style={styles.nameColumn}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {getInitials(item.firstName, item.lastName)}
                </Text>
              </View>
              <Text style={styles.personName} numberOfLines={1}>
                {item.fullName}
              </Text>
            </View>

            <View style={styles.departmentColumn}>
              <View style={styles.departmentTag}>
                <Text style={styles.departmentName} numberOfLines={1}>
                  {item.departmentName}
                </Text>
              </View>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.rowSeparator} />}
        ListEmptyComponent={
          <View style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>
              {loadState.error ? 'Error al cargar los datos' : 'Sin coincidencias'}
            </Text>
            <Text style={styles.emptyText}>
              {loadState.error ??
                'No hay personas que coincidan con el filtro o la búsqueda actual.'}
            </Text>
            {hasActiveFilters && !loadState.error && (
              <Pressable onPress={clearFilters} style={styles.outlineButton}>
                <Text style={styles.outlineButtonText}>RESTABLECER VISTA</Text>
              </Pressable>
            )}
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F4EF',
  },
  listContent: {
    alignSelf: 'center',
    maxWidth: 820,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 44,
    width: '100%',
  },
  header: {
    marginBottom: 8,
  },
  topBar: {
    alignItems: 'center',
    borderBottomColor: '#DCDAD0',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 14,
  },
  brandText: {
    color: '#181816',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
  },
  topMetrics: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topMetricText: {
    color: '#5B5A55',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  heroBlock: {
    paddingTop: 26,
    paddingBottom: 20,
  },
  title: {
    color: '#181816',
    fontSize: 38,
    fontWeight: '800',
    letterSpacing: -1,
    lineHeight: 42,
  },
  subtitle: {
    color: '#5B5A55',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 12,
    maxWidth: 520,
  },
  heroActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  outlineButton: {
    borderColor: '#181816',
    borderRadius: 4,
    borderWidth: 1.5,
    paddingHorizontal: 16,
    paddingVertical: 11,
    backgroundColor: 'transparent',
  },
  outlineButtonActive: {
    backgroundColor: '#181816',
  },
  outlineButtonText: {
    color: '#181816',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  outlineButtonTextActive: {
    color: '#F5F4EF',
  },
  searchBox: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#181816',
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    minWidth: 220,
    paddingHorizontal: 12,
  },
  searchInput: {
    color: '#181816',
    flex: 1,
    fontSize: 13,
    paddingVertical: 10,
  },
  clearLink: {
    paddingLeft: 8,
    paddingVertical: 6,
  },
  clearLinkText: {
    color: '#181816',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  filtersRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 18,
  },
  departmentChip: {
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1.5,
    flexDirection: 'row',
    gap: 7,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  chipColorDot: {
    borderRadius: 4,
    height: 8,
    width: 8,
  },
  departmentChipText: {
    fontSize: 12,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.78,
  },
  tableHeader: {
    borderBottomColor: '#181816',
    borderBottomWidth: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 4,
  },
  tableHeaderName: {
    color: '#181816',
    flex: 1,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  tableHeaderDepartment: {
    color: '#181816',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    textAlign: 'right',
    width: '40%',
  },
  personRow: {
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 62,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  nameColumn: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: 12,
    paddingRight: 10,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 17,
    borderWidth: 1,
    height: 34,
    justifyContent: 'center',
    width: 34,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  personName: {
    color: '#FFFFFF',
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
  },
  departmentColumn: {
    alignItems: 'flex-end',
    width: '40%',
  },
  departmentTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(255, 255, 255, 0.45)',
    borderRadius: 4,
    borderWidth: 1,
    maxWidth: '100%',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  departmentName: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  rowSeparator: {
    height: 8,
  },
  emptyCard: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#DCDAD0',
    borderRadius: 6,
    borderWidth: 1,
    marginTop: 12,
    padding: 28,
    gap: 10,
  },
  emptyTitle: {
    color: '#181816',
    fontSize: 16,
    fontWeight: '800',
  },
  emptyText: {
    color: '#5B5A55',
    fontSize: 14,
    textAlign: 'center',
  },
});
