
import React, { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Weight } from 'lucide-react';
import { 
  convertWeight, 
  weightUnits, 
  WeightUnit, 
  getUnitSymbol 
} from '@/utils/weightConversion';

const WeightConverter: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<WeightUnit>("kg");
  const [toUnit, setToUnit] = useState<WeightUnit>("g");
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      const convertedValue = convertWeight(numValue, fromUnit, toUnit);
      setResult(convertedValue);
    } else {
      setResult(0);
    }
  }, [value, fromUnit, toUnit]);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Allow only numbers and decimal point
    if (/^[0-9]*\.?[0-9]*$/.test(newValue) || newValue === '') {
      setValue(newValue);
    }
  };

  const handleFromUnitChange = (unit: WeightUnit) => {
    setFromUnit(unit);
  };

  const handleToUnitChange = (unit: WeightUnit) => {
    setToUnit(unit);
  };

  const formatResult = (num: number): string => {
    // Format with appropriate decimal places
    if (num === 0) return '0';
    if (Math.abs(num) < 0.001) return num.toExponential(4);
    if (Math.abs(num) < 1) return num.toFixed(5);
    if (Math.abs(num) < 10) return num.toFixed(4);
    if (Math.abs(num) < 100) return num.toFixed(3);
    if (Math.abs(num) < 1000) return num.toFixed(2);
    return num.toFixed(1);
  };

  return (
    <div className="flex justify-center w-full">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <div className="flex items-center justify-center mb-6 space-x-2">
          <Weight className="w-6 h-6 text-blue-500" />
          <h2 className="text-2xl font-bold text-center text-blue-700">محول الوزن</h2>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="weightValue" className="block text-right text-sm font-medium text-gray-700">
              القيمة
            </label>
            <Input
              id="weightValue"
              type="text"
              placeholder="أدخل القيمة"
              value={value}
              onChange={handleValueChange}
              className="text-right"
              dir="rtl"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="fromUnit" className="block text-right text-sm font-medium text-gray-700">
                تحويل من
              </label>
              <Select value={fromUnit} onValueChange={handleFromUnitChange}>
                <SelectTrigger id="fromUnit" className="text-right" dir="rtl">
                  <SelectValue placeholder="اختر وحدة" />
                </SelectTrigger>
                <SelectContent>
                  {weightUnits.map((unit) => (
                    <SelectItem key={`from-${unit.value}`} value={unit.value} className="text-right">
                      {unit.arabicLabel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="toUnit" className="block text-right text-sm font-medium text-gray-700">
                تحويل إلى
              </label>
              <Select value={toUnit} onValueChange={handleToUnitChange}>
                <SelectTrigger id="toUnit" className="text-right" dir="rtl">
                  <SelectValue placeholder="اختر وحدة" />
                </SelectTrigger>
                <SelectContent>
                  {weightUnits.map((unit) => (
                    <SelectItem key={`to-${unit.value}`} value={unit.value} className="text-right">
                      {unit.arabicLabel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-1">النتيجة</p>
              <div className="flex items-center justify-center">
                <p className="text-3xl font-bold text-blue-700">
                  {value ? formatResult(result) : '0'} 
                  <span className="text-base text-blue-500 ml-1">
                    {getUnitSymbol(toUnit)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WeightConverter;
