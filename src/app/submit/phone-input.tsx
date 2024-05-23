"use client"
import "react-phone-number-input/style.css";
import * as RPNInput from "react-phone-number-input";
import { forwardRef, useCallback } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

import flags from "react-phone-number-input/flags";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input, InputProps } from "@/components/ui/input";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
interface PhoneProps<TFormValues extends FieldValues> {
    name: Path<TFormValues>;
    control: Control<TFormValues> | undefined;
    label: string;
    placeholder: string;
}

const Phone = <TFormValues extends FieldValues>({
    name,
    control,
    label,
    placeholder,
}: PhoneProps<TFormValues>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="text-white text-[16px]" htmlFor={name}>
                        {label}
                    </FormLabel>
                    <FormControl>
                        <RPNInput.default
                            defaultCountry="ET"
                            className={cn("flex ")}
                            flagComponent={FlagComponent}
                            countrySelectComponent={CountrySelect}
                            inputComponent={InputComponent}
                            placeholder={placeholder}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};

export default Phone;

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
    const Flag = flags[country];

    return (
        <span className="flex h-4 w-6 hover:bg-black overflow-hidden rounded-sm ">
            {Flag && <Flag title={countryName} />}
        </span>
    );
};
FlagComponent.displayName = "FlagComponent";

type CountrySelectOption = { label: string; value: RPNInput.Country };

type CountrySelectProps = {
    disabled?: boolean;
    value: RPNInput.Country;
    onChange: (value: RPNInput.Country) => void;
    options: CountrySelectOption[];
};

const CountrySelect = ({
    disabled,
    value,
    onChange,
    options,
}: CountrySelectProps) => {
    const handleSelect = useCallback(
        (country: RPNInput.Country) => {
            onChange(country);
        },
        [onChange]
    );

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    type="button"
                    variant={"outline"}
                    className={cn(
                        "flex gap-1 rounded-e-none rounded-xl px-3 bg-black border-none py-6"
                    )}
                    disabled={disabled}
                >
                    <FlagComponent country={value} countryName={value} />
                    <ChevronsUpDown
                        className={cn(
                            "-mr-2 h-4 w-4 opacity-50",
                            disabled ? "hidden" : "opacity-100"
                        )}
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0 bg-black">
                <Command>
                    <CommandList>
                        <ScrollArea className="h-72">
                            <CommandInput placeholder="Search country..." />
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup className="bg-black text-white ">
                                {options
                                    .filter((x) => x.value)
                                    .map((option) => (
                                        <CommandItem
                                            className="gap-2 hover:bg-cornflowerblue-600"
                                            key={option.value}
                                            onSelect={() => handleSelect(option.value)}
                                        >
                                            <FlagComponent
                                                country={option.value}
                                                countryName={option.label}
                                            />
                                            <span className="flex-1 text-sm hover:text-cornflowerblue-600">{option.label}</span>
                                            {option.value && (
                                                <span className="text-sm text-foreground/50 text-cornflowerblue-600">
                                                    {`+${RPNInput.getCountryCallingCode(option.value)}`}
                                                </span>
                                            )}
                                            <CheckIcon
                                                className={cn(
                                                    "ml-auto h-4 w-4",
                                                    option.value === value ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                        </CommandItem>
                                    ))}
                            </CommandGroup>
                        </ScrollArea>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

const InputComponent = forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => (
        <Input
            name={props.name}
            className=" bg-black text-white flex-initial border-cornflowerblue-200"
            placeholder="Phone number"
            {...props}
            ref={ref}
        />
    )
);
InputComponent.displayName = "InputComponent";

