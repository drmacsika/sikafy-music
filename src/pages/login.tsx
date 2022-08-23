import type { NextPage } from 'next';
import { getProviders, signIn } from 'next-auth/react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image'
import Photos from '../components/Photos';

type ProvidersProps = {
    name: string
}

const Login: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
                <Image
                    src='https://raw.githubusercontent.com/drmacsika/sikafy-music/master/public/sikafy_transparent.png'
                    alt='Logo'
                    width={200}
                    height={200}
                    className="w-52 mb-5"
                />
                {
                    Object.values(props.providers).map((provider: any) => (
                        <div key={provider.name}>
                            <button 
                                className="bg-[#f16334] rounded-full text-white p-5"
                                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                            >
                                Login with {provider.name}
                            </button>
                        </div>
                    ))
                }
                <p className="text-white text-center p-3">It's alright. Your login is secure. No data is breached or stored whatsoever.</p>
                <small className="text-white text-center p-3">&copy; 2022. <a href="https://nsikakimoh.com">Nsikak Imoh</a>.</small>
            </div>
        </>
    );
}

export default Login;

export const getServerSideProps: GetServerSideProps = async () => {
    const providers = await getProviders();
    
    return {
        props: {
            providers: providers,
        }
    }
}


