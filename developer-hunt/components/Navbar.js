import { FireIcon, HomeIcon, LightBulbIcon, PuzzleIcon, SparklesIcon, UserIcon } from '@heroicons/react/outline'
import NavItem from './NavItem'
import Link from 'next/link'

import firebase from 'firebase/app'
import 'firebase/auth'
import { FaPowerOff } from 'react-icons/fa'


const Navbar = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between bg-gray-900 p-4 ">
            <div className="flex flex-col sm:flex-row ">

                <Link href="/">
                    <a>
                        <NavItem title="HOME" Icon={HomeIcon} />
                    </a>
                </Link>
                <Link href="/problems">
                    <a>
                        <NavItem title="PROBLEMS" Icon={PuzzleIcon} />
                    </a>
                </Link>
                <Link href="/jobs">
                    <a>
                        <NavItem title="JOBS" Icon={FireIcon} />
                    </a>
                </Link>
                <Link href="/ideas">
                    <a>
                        <NavItem title="IDEA" Icon={LightBulbIcon} />
                    </a>
                </Link>
                <Link href="/internships">
                    <a>
                        <NavItem title="INTERNSHIPS" Icon={SparklesIcon} />
                    </a>
                </Link>
            </div>

            <button onClick={() => {
                const auth = firebase.auth()
                auth.signOut()
            }}>
                <NavItem title="Sign Out" Icon={FaPowerOff} />
            </button>



        </div>
    );
}

export default Navbar;