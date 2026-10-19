import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { Departamento } from '@/models/entities/departamento';
import { Persona } from '@/models/entities/persona';
import { departamentosPersonasVM } from '@/viewmodels/departamentos-personas-vm';
import { useTheme } from '@/hooks/use-theme';

/** Propiedades necesarias para mostrar la ficha de una persona. */
type PersonaCardProps = {
  /** Persona cuyos datos se presentan en la ficha. */
  persona: Persona;
};

/**
 * Muestra la identidad y el número de referencia de una persona del equipo.
 * @param persona Persona que se representa.
 */
function PersonaCard({ persona }: PersonaCardProps) {
  const theme = useTheme();
  const initials = `${persona.nombre.charAt(0)}${persona.apellidos.charAt(0)}`.toUpperCase();

  return (
    <ThemedView
      type="backgroundElement"
      style={[styles.personCard, { borderColor: theme.backgroundSelected }]}>
      <View style={styles.avatar}>
        <ThemedText style={styles.avatarText}>{initials}</ThemedText>
      </View>
      <View style={styles.personDetails}>
        <ThemedText type="smallBold">{persona.nombre} {persona.apellidos}</ThemedText>
        <View style={styles.memberCaption}>
          <View style={styles.onlineDot} />
          <ThemedText type="small" themeColor="textSecondary">Miembro del equipo</ThemedText>
        </View>
      </View>
      <View style={[styles.personNumber, { backgroundColor: theme.backgroundSelected }]}>
        <ThemedText themeColor="textSecondary" style={styles.personNumberText}>
          {String(persona.id).padStart(2, '0')}
        </ThemedText>
      </View>
    </ThemedView>
  );
}

/**
 * Vista principal para elegir un departamento y consultar sus integrantes y total.
 * El menú se renderiza únicamente mientras está abierto.
 */
export function PersonaDepartamentoView() {
  const theme = useTheme();
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState<Departamento | null>(null);
  const [desplegableAbierto, setDesplegableAbierto] = useState(false);
  const viewModel = useMemo(() => {
    const model = new departamentosPersonasVM();
    model.departamentoSeleccionado = departamentoSeleccionado;
    return model;
  }, [departamentoSeleccionado]);

  return (
    <ThemedView style={styles.root}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <View style={styles.heroCard}>
            <View style={styles.heroOrbLarge} />
            <View style={styles.heroOrbSmall} />
            <View style={styles.heroTopline}>
              <View style={styles.brandMark}>
                <ThemedText style={styles.brandMarkText}>N</ThemedText>
              </View>
              <ThemedText style={styles.heroEyebrow}>NODO  /  PEOPLE</ThemedText>
              <View style={styles.liveBadge}>
                <View style={styles.liveDot} />
                <ThemedText style={styles.liveText}>ACTIVO</ThemedText>
              </View>
            </View>
            <View style={styles.heroCopy}>
              <ThemedText style={styles.heroKicker}>EL TALENTO, EN SU SITIO</ThemedText>
              <ThemedText style={styles.heroTitle}>Conoce a{'\n'}tu equipo.</ThemedText>
              <ThemedText style={styles.heroDescription}>
                Explora las personas que hacen grande cada departamento.
              </ThemedText>
            </View>
            <View style={styles.heroFooter}>
              <ThemedText style={styles.heroFooterText}>DIRECTORIO DE PERSONAS</ThemedText>
              <ThemedText style={styles.heroArrow}>↘</ThemedText>
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleWrap}>
              <ThemedText style={styles.sectionIndex}>01</ThemedText>
              <ThemedText style={styles.sectionTitle}>Departamentos</ThemedText>
            </View>
            <View style={[styles.totalBadge, { backgroundColor: theme.backgroundElement }]}>
              <ThemedText>{String(viewModel.listadoDepartamentos.length).padStart(2, '0')}</ThemedText>
              <ThemedText themeColor="textSecondary" style={styles.totalBadgeLabel}>EQUIPOS</ThemedText>
            </View>
          </View>

          <View>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Seleccionar departamento"
              accessibilityState={{ expanded: desplegableAbierto }}
              onPress={() => setDesplegableAbierto((abierto) => !abierto)}
              style={({ pressed }) => [
                styles.departmentSelector,
                {
                  backgroundColor: theme.backgroundElement,
                  borderColor: desplegableAbierto ? '#54877A' : theme.backgroundSelected,
                },
                pressed && styles.pressed,
              ]}>
              <View style={styles.selectorIcon}>
                <ThemedText style={styles.selectorIconText}>▦</ThemedText>
              </View>
              <View style={styles.selectorCopy}>
                <ThemedText type="smallBold">
                  {departamentoSeleccionado?.nombre ?? 'Selecciona un departamento'}
                </ThemedText>
                <ThemedText type="small" themeColor="textSecondary" style={styles.selectorHint}>
                  {departamentoSeleccionado ? 'Cambiar departamento' : 'Toca para ver los departamentos'}
                </ThemedText>
              </View>
              <ThemedText style={styles.selectorChevron}>
                {desplegableAbierto ? '⌃' : '⌄'}
              </ThemedText>
            </Pressable>

            {/* Mantiene las opciones fuera de la vista hasta que el usuario abre el selector. */}
            {desplegableAbierto && (
              <ThemedView
                type="backgroundElement"
                style={[styles.departmentMenu, { borderColor: theme.backgroundSelected }]}>
                {viewModel.listadoDepartamentos.map((departamento, index) => {
                  const selected = departamentoSeleccionado?.id === departamento.id;
                  return (
                    <Pressable
                      key={departamento.id}
                      accessibilityRole="button"
                      accessibilityState={{ selected }}
                      onPress={() => {
                        setDepartamentoSeleccionado(departamento);
                        setDesplegableAbierto(false);
                      }}
                      style={({ pressed }) => [
                        styles.departmentOption,
                        selected && { backgroundColor: theme.backgroundSelected },
                        pressed && styles.pressed,
                      ]}>
                      <View style={[
                        styles.optionNumber,
                        { backgroundColor: selected ? '#D9F2E7' : theme.backgroundSelected },
                      ]}>
                        <ThemedText style={[
                          styles.optionNumberText,
                          { color: selected ? '#1F5147' : theme.textSecondary },
                        ]}>
                          {String(index + 1).padStart(2, '0')}
                        </ThemedText>
                      </View>
                      <ThemedText type="smallBold" style={styles.optionName}>
                        {departamento.nombre}
                      </ThemedText>
                      {selected && <ThemedText style={styles.optionCheck}>✓</ThemedText>}
                    </Pressable>
                  );
                })}
              </ThemedView>
            )}
          </View>

          {/* El resumen y el listado solo tienen sentido después de elegir un departamento. */}
          {departamentoSeleccionado ? (
            <>
              <View style={styles.summaryCard}>
                <View style={styles.summaryDecoration} />
                <View style={styles.summaryText}>
                  <View style={styles.summaryPill}>
                    <View style={styles.summaryPillDot} />
                    <ThemedText style={styles.summaryLabel}>EQUIPO SELECCIONADO</ThemedText>
                  </View>
                  <ThemedText style={styles.summaryDepartment}>{departamentoSeleccionado.nombre}</ThemedText>
                  <ThemedText style={styles.summaryCaption}>Personas en este departamento</ThemedText>
                </View>
                <View style={styles.countCircle}>
                  <ThemedText style={styles.count}>{viewModel.numeroPersonas}</ThemedText>
                </View>
              </View>

              <View style={styles.sectionHeader}>
                <View style={styles.sectionTitleWrap}>
                  <ThemedText style={styles.sectionIndex}>02</ThemedText>
                  <ThemedText style={styles.sectionTitle}>Personas</ThemedText>
                </View>
                <ThemedText themeColor="textSecondary" style={styles.listCount}>
                  {String(viewModel.numeroPersonas).padStart(2, '0')} {viewModel.numeroPersonas === 1 ? 'PERSONA' : 'PERSONAS'}
                </ThemedText>
              </View>

              {viewModel.listado.map(({ persona }) => (
                <PersonaCard key={persona.id} persona={persona} />
              ))}
              {viewModel.numeroPersonas === 0 && (
                <ThemedView
                  type="backgroundElement"
                  style={[styles.emptyCard, { borderColor: theme.backgroundSelected }]}>
                  <ThemedText type="small" themeColor="textSecondary">
                    Este departamento todavía no tiene personas asignadas.
                  </ThemedText>
                </ThemedView>
              )}
            </>
          ) : (
            <ThemedView
              type="backgroundElement"
              style={[styles.emptyCard, { borderColor: theme.backgroundSelected }]}>
              <View style={styles.emptyIconWrap}>
                <ThemedText style={styles.emptyIcon}>✳</ThemedText>
              </View>
              <ThemedText style={styles.emptyTitle}>Tu próximo equipo te espera.</ThemedText>
              <ThemedText type="small" themeColor="textSecondary" style={styles.emptyMessage}>
                Selecciona un departamento para ver quiénes lo forman y cuántas personas hay.
              </ThemedText>
              <ThemedText style={styles.emptyFootnote}>EMPIEZA POR ARRIBA  ↓</ThemedText>
            </ThemedView>
          )}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
  },
  content: {
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.two,
    paddingBottom: Spacing.six,
    gap: Spacing.four,
  },
  heroCard: {
    minHeight: 360,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: '#173D36',
    padding: Spacing.four,
    justifyContent: 'space-between',
    shadowColor: '#173D36',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
  },
  heroOrbLarge: {
    position: 'absolute',
    width: 270,
    height: 270,
    borderRadius: 135,
    right: -105,
    top: 55,
    backgroundColor: '#205248',
    opacity: 0.72,
  },
  heroOrbSmall: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    right: 2,
    top: 148,
    borderWidth: 1,
    borderColor: '#4B796D',
    opacity: 0.5,
  },
  heroTopline: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  brandMark: {
    width: 34,
    height: 34,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9F2E7',
  },
  brandMarkText: {
    color: '#173D36',
    fontSize: 17,
    fontWeight: '900',
  },
  heroEyebrow: {
    flex: 1,
    color: '#D9F2E7',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.3,
  },
  liveBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: '#4E756A',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#B8E777',
  },
  liveText: {
    color: '#D9F2E7',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  heroCopy: {
    maxWidth: 330,
    gap: Spacing.two,
    paddingVertical: Spacing.four,
  },
  heroKicker: {
    color: '#B8E777',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  heroTitle: {
    color: '#F3F5EA',
    fontSize: 43,
    fontWeight: '700',
    lineHeight: 47,
    letterSpacing: -1.4,
  },
  heroDescription: {
    maxWidth: 260,
    color: '#C1D4CC',
    fontSize: 14,
    lineHeight: 21,
  },
  heroFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#45685E',
    paddingTop: Spacing.three,
  },
  heroFooterText: {
    color: '#B2C9BF',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  heroArrow: {
    color: '#B8E777',
    fontSize: 19,
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.one,
  },
  sectionTitleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  sectionIndex: {
    color: '#54877A',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    letterSpacing: -0.3,
  },
  totalBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  totalBadgeLabel: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.7,
  },
  departmentSelector: {
    minHeight: 72,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    gap: Spacing.two,
  },
  selectorIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: '#D9F2E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectorIconText: {
    color: '#1F5147',
    fontSize: 20,
    fontWeight: '800',
  },
  selectorCopy: {
    flex: 1,
    gap: 3,
  },
  selectorHint: {
    fontSize: 12,
  },
  selectorChevron: {
    color: '#54877A',
    fontSize: 23,
    fontWeight: '700',
    paddingHorizontal: Spacing.one,
  },
  departmentMenu: {
    marginTop: Spacing.two,
    padding: Spacing.one,
    borderRadius: 20,
    borderWidth: 1,
    gap: 3,
  },
  departmentOption: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    borderRadius: 14,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.two,
  },
  optionNumber: {
    width: 34,
    height: 34,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionNumberText: {
    fontSize: 11,
    fontWeight: '800',
  },
  optionName: {
    flex: 1,
  },
  optionCheck: {
    color: '#1F5147',
    fontSize: 18,
    fontWeight: '800',
    paddingHorizontal: Spacing.one,
  },
  pressed: {
    opacity: 0.82,
    transform: [{ scale: 0.985 }],
  },
  summaryCard: {
    minHeight: 150,
    overflow: 'hidden',
    borderRadius: 25,
    padding: Spacing.three,
    backgroundColor: '#1F5147',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Spacing.one,
  },
  summaryDecoration: {
    position: 'absolute',
    width: 210,
    height: 210,
    borderRadius: 105,
    right: -78,
    top: -95,
    borderWidth: 1,
    borderColor: '#4E796B',
    opacity: 0.6,
  },
  summaryText: {
    flex: 1,
    gap: 7,
  },
  summaryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    borderRadius: 10,
    backgroundColor: '#37685D',
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  summaryPillDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#B8E777',
  },
  summaryLabel: {
    color: '#D4E6DD',
    fontSize: 8,
    fontWeight: '800',
    letterSpacing: 0.9,
  },
  summaryDepartment: {
    color: '#F3F5EA',
    fontSize: 23,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  summaryCaption: {
    color: '#BDD1C7',
    fontSize: 11,
  },
  countCircle: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: '#B8E777',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Spacing.two,
    borderWidth: 5,
    borderColor: '#3D6A5D',
  },
  count: {
    color: '#173D36',
    fontSize: 37,
    fontWeight: '700',
    lineHeight: 42,
  },
  listCount: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  personCard: {
    minHeight: 82,
    borderRadius: 20,
    paddingHorizontal: Spacing.three,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    borderWidth: 1,
    shadowColor: '#102C26',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 17,
    backgroundColor: '#D9F2E7',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#C5E4D7',
  },
  avatarText: {
    color: '#1F5147',
    fontSize: 13,
    fontWeight: '800',
  },
  personDetails: {
    flex: 1,
    gap: 5,
  },
  memberCaption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  onlineDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#62A58B',
  },
  personNumber: {
    width: 31,
    height: 31,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  personNumberText: {
    fontSize: 10,
    fontWeight: '800',
  },
  emptyCard: {
    minHeight: 210,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.four,
    gap: Spacing.two,
    borderWidth: 1,
  },
  emptyIconWrap: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: '#D9F2E7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.one,
  },
  emptyIcon: {
    color: '#1F5147',
    fontSize: 25,
    fontWeight: '600',
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  emptyMessage: {
    maxWidth: 260,
    textAlign: 'center',
    lineHeight: 20,
  },
  emptyFootnote: {
    color: '#54877A',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: Spacing.two,
  },
});
