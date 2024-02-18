import { StatusBar } from "expo-status-bar";
import { Alert, Pressable, Text, View, Image, ScrollView } from "react-native";
import { InputCustom } from "./components/InputCustom";
import { useState } from "react";

export default function App() {
  const handleLoginPress= () => {
    Alert.alert(email);
    Alert.alert(password);
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <ScrollView>
    <View className="px-4">
      <Image
        className="w-40 h-40 mx-auto mt-20 mb-10"
        source={require("./assets/rn_login_logo.png")}
      />

      <Text className=" text-center font-extrabold text-3xl text-black">
        Sistemas de Login
      </Text>
      <Text className="text-center my-4 text-base text-gray-400">
        Bem vindo(a)! Digite seus dados abaixo.
      </Text>

      <InputCustom
        label="Email"
        placeholder="Digite seu email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        value={email}

      />

      <InputCustom
        label="Senha"
        placeholder="********"
        keyboardType="default"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <Text className=" text-blue-700 text-right py-3 px-2 font-bold">
        Esqueci minha senha
      </Text>

      <Pressable
        onPress={handleLoginPress}
        className="bg-blue-500 px-6 py-2  mt-14  h-12 rounded items-center justify-center"
      >
        <Text className="text-white font-bold text-lg">Entrar</Text>
      </Pressable>

      <Text className="text-center my-4 text-base text-gray-400">
        Não tem uma conta?{" "}
        <Text className="text-blue-700 font-bold">Cadastre-se</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}
