"use client";

import { useContext, FormEvent, useState } from "react";
import styles from "../app/styles/page.module.scss";
import Image from "next/image";

import logoImg from "../../public/logo.svg";

import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

import { AuthContext } from "./contexts/AuthContext";

import Link from "next/link";

export default function Home() {
    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        let data = {
            email,
            password
        };

        await signIn(data);
    }

    return (
        <>
            <title>Faça seu login</title>
            <div className={styles.containerCenter}>
                <Image src={logoImg} alt="Logo Divine Pizza" />

                <div className={styles.login}>
                    <form onSubmit={handleLogin}>
                        <Input
                            placeholder="Digite seu email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            placeholder="Sua senha"
                            type="password"
                            value={password}
                            onChange={ (e) => setPassword(e.target.value) }
                        />
                        <Button type="submit" loading={false}>
                            Acessar
                        </Button>
                    </form>

                    <Link href="/signup" className={styles.text}>
                        Não possui uma conta? Cadastre-se
                    </Link>
                </div>
            </div>
        </>
    );
}
