import styles from "../../styles/page.module.scss";
import Head from "next/head";
import Image from "next/image";

import logoImg from "../../../../public/logo.svg";

import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

import Link from "next/link";

export default function Signup() {
    return (
        <>
            <title>Faça seu cadastro agora!</title>
            <div className={styles.containerCenter}>
                <Image src={logoImg} alt="Logo Divine Pizza" />

                <div className={styles.login}>
                    <h1>Criando sua conta</h1>
                    <form>
                        <Input placeholder="Digite seu nome" type="text" />
                        <Input placeholder="Digite seu email" type="text" />
                        <Input placeholder="Sua senha" type="password" />
                        <Button type="submit" loading={false}>
                            Acessar
                        </Button>
                    </form>

                    <Link href="/" className={styles.text}>
                        Já possui uma conta? Faça login!
                    </Link>
                </div>
            </div>
        </>
    );
}
