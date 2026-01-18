import React from "react";
import { Row } from "../ui/row";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "../ui/multi-select";
import { skill_options } from "@/app/my-profile/utils/constants";

type Field = {
  name: string;
  title: string;
  placeholder?: string;
  type: string;
  description?: string;
  className?: string;
  options?: object[];
  rows?: number;
};

type Props = {
  fields: Field[];
  form: any;
};

export default function FieldGenerator({ fields, form }: Props) {
  return (
    <>
      {fields?.map((field) => {
        const { name, title, placeholder, type, description, className, rows } =
          field;
        switch (type) {
          case "multi-select":
            return (
              <div className={cn("mr-5 mb-5", className)} key={name}>
                {" "}
                <FormField
                  control={form.control}
                  name={name}
                  defaultValue={""}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>{title}</FormLabel>
                        <FormControl>
                          <MultiSelect
                            onValuesChange={(e) => field.onChange(e)}
                            values={field?.value ?? []}
                          >
                            <MultiSelectTrigger className="w-full">
                              <MultiSelectValue placeholder="Javascript, React, Laravel, Node, ...." />
                            </MultiSelectTrigger>
                            <MultiSelectContent>
                              <MultiSelectGroup>
                                {skill_options?.map((skill) => (
                                  <MultiSelectItem
                                    key={skill?.value}
                                    value={skill.value}
                                  >
                                    {skill.label}
                                  </MultiSelectItem>
                                ))}
                              </MultiSelectGroup>
                            </MultiSelectContent>
                          </MultiSelect>
                        </FormControl>
                        <FormDescription>{description}</FormDescription>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            );
          case "textarea":
            return (
              <div className={cn("mr-5 mb-5", className)} key={name}>
                {" "}
                <FormField
                  control={form.control}
                  name={name}
                  defaultValue={""}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{title}</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder={placeholder}
                          rows={rows}
                        />
                      </FormControl>
                      <FormDescription>{description}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            );
          default:
            return (
              <div className={cn("mr-5 mb-5", className)} key={name}>
                {" "}
                <FormField
                  control={form.control}
                  name={name}
                  defaultValue={""}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{title}</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={placeholder}
                          type={type}
                        />
                      </FormControl>
                      <FormDescription>{description}</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            );
        }
      })}
    </>
  );
}
