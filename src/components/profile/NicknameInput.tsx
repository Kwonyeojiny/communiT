import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User } from 'lucide-react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface NicknameInputProps {
  id: string;
  label: string;
  placeholderValue: string;
  register: UseFormRegisterReturn;
  error?: FieldError | null;
}

const NicknameInput: React.FC<NicknameInputProps> = ({
  id,
  label,
  placeholderValue,
  register,
  error,
}) => {
  return (
    <div className="relative w-full ">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      <div className="relative mt-1">
        <Input
          id={id}
          type="text"
          placeholder={placeholderValue}
          {...register}
          className={`pl-10 pr-10 ${error ? 'border-red-500' : ''}`}
        />
        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5" />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default NicknameInput;
