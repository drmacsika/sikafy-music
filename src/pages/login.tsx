import type { NextPage } from 'next';
import { getProviders, signIn } from 'next-auth/react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image'

type ProvidersProps = {
    name: string
}

const Login: NextPage = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
                <Image
                    src="/sikafy_transparent.png"
                    alt="Sikafy Music Logo"
                    width={300}
                    height={300}
                    className="w-52 mb-5"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAABAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAEAAQUAAAAAAAAAAAAAAAAAAgMENHOx/8QAFAEBAAAAAAAAAAAAAAAAAAAACP/EABgRAAIDAAAAAAAAAAAAAAAAAAABAjEy/9oADAMBAAIRAxEAPwCh2uLR1x4AErsXs9M//9k="
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


