import logo from "../../images/logo.png";

const Footer = () =>{
    return(
        <div className="w-full md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-center items-center">
                    <img src={logo} alt="logo" className="w-32"/>
                </div>

            </div>
            <div className=" flex justify-center items-center flex-col mt-5">
                <p className="text-white text-sm text-center">Equipe</p>
                <br/>
                <a className="text-white text-sm text-center" href='https://github.com/May199'>Emanuelle Neves</a>
                <a className="text-white text-sm text-center" href='https://github.com/Mayh6m'>Matheus Texeira</a>
                <a className="text-white text-sm text-center" href='https://github.com/joaomonteiroSN'>João Monteiro</a>

            </div>

            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5"/>

            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">

                <p className="text-white text-sm text-center">App Blockchain 2022</p>
                <p className="text-white text-sm text-center">Copyright © 2022 - Todos os direitos reservados</p>

            </div>
        
        </div>
    );
}

export default Footer;