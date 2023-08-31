import Colaborador from '../Colaborador'
import './Time.css'

const Time = ( {colaboradores, corPrimaria, corSecundaria, nome, aoDeletar} ) => {
    const css = { backgroundColor: corSecundaria }

    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => {
                    return <Colaborador corDeFundo={corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={aoDeletar} />; 
                })}
            </div>
        </section> 
        : ''
    )
}

export default Time