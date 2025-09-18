import partyFetch from "../axios/config"

import { useState, useEffect } from "react"

import { useParams, Link, Navigate } from "react-router-dom"

const Party = () => {
    const { id } = useParams()
    const [party, setParty] = useState(null)

    //Load Party
    useEffect(() => {
        const loadParty = async () => {
            const res = await partyFetch.get(`/parties/${id}`)
            console.log(res.data);
            setParty(res.data)
        }
        loadParty()
    }, [])

    if (!party) return <p>Carregando...</p>
    return (
        <div className="party">
            <h1>{party.title}</h1>
            <div className="actions-container">
                <Link className="btn">Editar</Link>
                <button className="btn-secondary">Excluir</button>
                <p>Orçamento da festa {party.budget}</p>
                <h3>Serviços contradados:</h3>
                <div className="services-container">
                    {party.services.map((service) => (
                        <div className="service" key={service._id}>
                            <img src={service.image} alt={service.name} />
                            <p>{service.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Party