'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Localidades() {

    const [ufs, setUfs] = useState([]); // alterado
    const [pais, setPais] = useState('');
    const [cidades, setCidades] = useState('');

    const getUfs = async () => { // alterado
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'); // alterado
            if (!response.ok) {
                throw new Error('Ocorreu um erro:', response.statusText);
            }
            const data = await response.json();
            console.log('dados', data);
            setUfs(data)
        } catch (e) {
            console.log('Ocorreu um erro ao buscar os países:', e.message);
        }
    }

    const getCities = async (p) => { // alterei
        try {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${p}/municipios`);
            if (!response.ok) {
                throw new Error('Ocorreu um erro:', response.statusText);
            }
            const data = await response.json();
            console.log('dados', data);
            setCidades(data); // alterei
        } catch (e) {
            console.log('Ocorreu um erro ao buscar as cidades:', e.message); // alterei
        }
    }

    const selectUf = (ev) => {
        const p = ev.target.value
        setPais(p);
        console.log(p)
        getCities(p)
    }

    useEffect(() => {
        getUfs(); // alterei
    }, [])

    return (
        <div>
            <h1>Localidades</h1>

            <select
                value={pais}
                onChange={ev => selectUf(ev)}
            >
                <option value='' disabled>Selecione o estado</option>
                {ufs.map(uf => (
                    <option
                        value={uf.id}
                        key={uf.id}
                    >
                        {`${uf.sigla} - ${uf.nome}`}
                    </option>
                )
                )}
            </select>
            {cidades &&
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>aa</th>
                            <th>NOME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cidades.map(cidades => (
                            <tr key={cidades.id}>
                                <td>{cidades.id}</td>
                                <td>{cidades.sigla}</td>
                                <td>{cidades.nome}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

