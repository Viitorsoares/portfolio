import { Code, Menu } from 'lucide-react';

export default function Header() {
    return (
        <header className='w-full h-screen'>
            <nav className='flex justify-between px-5 mt-4'>
                <div className='flex gap-2 text-xl'>
                    <Code className='text-main-green w-6 h-6' />
                    <h1 className='text-main-text'>Vitor</h1>
                </div>

                <div>
                    <div>
                        
                    </div>
                    <Menu className='text-main-text' />
                </div>
            </nav>
        </header>
    )
}