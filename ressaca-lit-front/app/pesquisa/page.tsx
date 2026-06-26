import styles from '@/app/styles/Pesquisa.module.css'

export default function Page() {
    return (
        <div className='flex flex-col w-screen h-screen'>
            <header className={`${styles.barra_de_pesquisa} flex flex-row justify-center p-6`}>
                <div>
                    <form action="get" className='flex flex-row gap-4'>
                        <input type="text" name="nome" id="nome" placeholder="Insira o nome do livro" className='border-white border-3 rounded-full py-1 pl-4 w-[90rem]'/>
                        <button className={`cursor-pointer ${styles.botao} rounded-2xl px-2 font-sans`}  type="submit">🔍Pesquisar</button>
                    </form>
                </div>
            </header>
            <main>

            </main>    
        </div>
    )
}