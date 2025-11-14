'use client';
import { useState } from "react";
import styles from "./page.module.css";

export default function Msgs() {

    const turmas = [
        { id: 1, nome: "Wagner", turma: "2A", msg: "Mensagem inicial", dt: "10-11-2025 / 17:13:54" },
        { id: 2, nome: "Wagner", turma: "2B", msg: "Mensagem inicial", dt: "10-11-2025 / 17:13:54" }
    ];

    const [turma, setTurma] = useState(null);

    const getTur = async () => { // alterado
        try {
            const response = await fetch('https://api.front.dev.vilhena.ifro.edu.br/msgs');
            if (!response.ok) {
                throw new Error('Ocorreu um erro:', response.statusText);
            }
            const data = await response.json();
            console.log('dados', data);
            setUfs(data)
        } catch (e) {
            console.log('Ocorreu um erro ao buscar as turmas', e.message);
        }
    }


    return (
        <div>
            <h1>Mensagens</h1>


            <table className={styles.tbl}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>TURMA</th>
                        <th>MENSAGEM</th>
                        <th>DATA / HORA</th>

                    </tr>
                </thead>
                <tbody>
                    {turmas.map(turma => (
                        <tr key={turma.id}>
                            <td>{turma.id}</td>
                            <td>{turma.nome}</td>
                            <td>{turma.turma}</td>
                            <td>{turma.msg}</td>
                            <td>{turma.dt}</td>


                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}