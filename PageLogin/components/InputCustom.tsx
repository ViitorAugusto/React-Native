import { Text, TextInput, View } from "react-native";

type InputProps = {
  placeholder: string;
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "number-pad"
    | "name-phone-pad"
    | "decimal-pad"
    | "twitter"
    | "web-search"
    | "visible-password";
  label: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  value?: string;
};

export const InputCustom = (props: InputProps) => {
  return (
    <View className="flex flex-col my-1">
      <Text className="py-2 text-gray-500 font-medium">{props.label}</Text>
      <TextInput
        className="border-2 border-gray-300 rounded h-12 px-4"
        placeholder={props.placeholder}
        keyboardType={props.keyboardType} // Tipo do teclado
        secureTextEntry={props.secureTextEntry} // Se é para esconder a senha
        onChangeText={props.onChangeText}
        value={props.value}
        autoCapitalize="none" // Não deixa a primeira letra maiúscula
      />
    </View>
  );
};
