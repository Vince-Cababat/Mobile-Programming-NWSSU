import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#2563eb',
  danger: '#dc2626',
  background: '#f7f7f7',
  card: '#ffffff',
  border: '#dddddd',
  text: '#111827',
  muted: '#6b7280',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.muted,
    marginBottom: 24,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  secondaryButton: {
    backgroundColor: colors.card,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  list: {
    paddingTop: 8,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: colors.card,
    padding: 18,
    borderRadius: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  category: {
    fontSize: 13,
    color: colors.muted,
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  linkText: {
    color: colors.primary,
    fontWeight: '600',
  },
  detailLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.text,
    marginTop: 12,
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 15,
    color: colors.muted,
  },
  removeText: {
    color: colors.danger,
    fontWeight: '700',
  },
  emptyText: {
    fontSize: 16,
    color: colors.muted,
    textAlign: 'center',
    marginTop: 40,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  totalText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
});
