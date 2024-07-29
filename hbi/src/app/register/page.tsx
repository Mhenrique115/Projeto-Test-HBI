"use client"

import { Input } from "@/components/Input";
import { useState } from "react";
import { API } from "@/Services/api";
import { Header } from "@/components/Header";



export default function Home() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [data, setData] = useState<string>("");
  const [celular, setCelular] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [endereco, setEndereco] = useState<string>("");
  const [bairro, setBairro] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const [complemento, setComplemento] = useState<string>("")
  const [cidade, setCidade] = useState<string>("");
  const [UF, setUF] = useState<string>("");

  async function getAddress() {
    const response = await API.get(`https://viacep.com.br/ws/${cep}/json/`)
    setEndereco(response.data.logradouro)
    setBairro(response.data.bairro)
    setCidade(response.data.localidade)
    setUF(response.data.uf)
    console.log(response);
  }

  return (
    <section className="w-screen h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 justify-center items-center  bg-gradient-to-r from-sky-600 to-blue-900 p-5">

        <div className="md:w-4/6 w-3/4  h-full bg-sky-700 p-5  flex flex-col shadow-xl rounded-lg">
          <h2 className="text-lg font-semibold mb-10">Cadastre-se:</h2>

          <div className="flex flex-1 flex-col text-sm">
            <h4 className="text-base font-semibold mb-2">Dados Básicos</h4>
            <form action="cadastro.html" method="post">
              <div className="grid grid-cols-1 md:grid-cols-4  gap-4 mb-10">

                <Input width={"col-span-4"}
                  label="Nome:"
                  type="text"
                  placeholder="Nome Completo"
                />

                <Input width={"col-span-4"}
                  label="E-mail:"
                  type="email"
                  placeholder="exemplo@domínio.com"
                />

                <Input width={"col-span-4 md:col-span-2 "}
                  label="Dt. Nascimento:"
                  type="date"
                />

                <Input width={"col-span-4 md:col-span-2"}
                  label="Celular:"
                  type="text"
                  placeholder="(00) 00000-0000"
                />

              </div>

              <h4 className="text-base font-semibold mb-2">Endereço</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Input width={"col-span-4 md:col-span-1 "}
                  label="Cep:"
                  type="text"
                  placeholder="Código Postal"
                  onChange={(e) => setCep(e.target.value)}
                  onBlur={getAddress}
                  value={cep}
                />
                <Input width={"col-span-4 md:col-span-3"}
                  label="Endereço:"
                  type="text"
                  placeholder="Logradouro"
                  onChange={(e) => setEndereco(e.target.value)}
                  value={endereco}
                />
                <Input width={"col-span-4 md:col-span-3"}
                  label="Bairro:"
                  type="text"
                  placeholder="Bairro"
                  onChange={(e) => setBairro(e.target.value)}
                  value={bairro}
                />
                <Input width={"col-span-4 md:col-span-1"}
                  label="Nº:"
                  type="text"
                  placeholder="Numero"

                />
                <Input width={"col-span-4 md:col-span-1"}
                  label="Complemento:"
                  type="text"
                  placeholder="Complemento"
                />
                <Input width={"col-span-4 md:col-span-2"}
                  label="Cidade:"
                  type="text"
                  placeholder="Cidade"
                  onChange={(e) => setCidade(e.target.value)}
                  value={cidade}
                />
                <Input width={"col-span-4 md:col-span-1"}
                  label="UF:"
                  type="text"
                  placeholder="Unidade Federativa"
                  onChange={(e) => setUF(e.target.value)}
                  value={UF}
                />

              </div>
              <div className=" mt-4 flex justify-between text-sm">
                <a href="http://localhost:3000" className=" bg-sky-800 shadow p-2 hover:bg-sky-900 rounded-lg">CANCELAR</a>
                <button className="p-2  bg-sky-900 shadow hover:bg-sky-950 rounded-lg">CADASTRAR</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

