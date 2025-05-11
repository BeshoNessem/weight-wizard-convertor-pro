
export type WeightUnit = 'kg' | 'g' | 'ton' | 'lb';

export interface UnitInfo {
  value: WeightUnit;
  label: string;
  arabicLabel: string;
}

export const weightUnits: UnitInfo[] = [
  { value: 'kg', label: 'Kilograms', arabicLabel: 'كيلوغرام' },
  { value: 'g', label: 'Grams', arabicLabel: 'غرام' },
  { value: 'ton', label: 'Tons', arabicLabel: 'طن' },
  { value: 'lb', label: 'Pounds', arabicLabel: 'باوند' }
];

// Convert any weight to grams (base unit for conversions)
const convertToGrams = (value: number, fromUnit: WeightUnit): number => {
  switch (fromUnit) {
    case 'kg':
      return value * 1000;
    case 'g':
      return value;
    case 'ton':
      return value * 1000000;
    case 'lb':
      return value * 453.59237;
    default:
      return value;
  }
};

// Convert from grams to target unit
const convertFromGrams = (grams: number, toUnit: WeightUnit): number => {
  switch (toUnit) {
    case 'kg':
      return grams / 1000;
    case 'g':
      return grams;
    case 'ton':
      return grams / 1000000;
    case 'lb':
      return grams / 453.59237;
    default:
      return grams;
  }
};

// Main conversion function
export const convertWeight = (
  value: number,
  fromUnit: WeightUnit,
  toUnit: WeightUnit
): number => {
  if (isNaN(value)) return 0;
  if (fromUnit === toUnit) return value;
  
  const grams = convertToGrams(value, fromUnit);
  return convertFromGrams(grams, toUnit);
};

// Get unit symbol
export const getUnitSymbol = (unit: WeightUnit): string => {
  switch (unit) {
    case 'kg':
      return 'kg';
    case 'g':
      return 'g';
    case 'ton':
      return 't';
    case 'lb':
      return 'lb';
    default:
      return '';
  }
};
