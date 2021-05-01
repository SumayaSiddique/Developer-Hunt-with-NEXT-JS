import { FireIcon, HomeIcon, LightBulbIcon, PuzzleIcon, SparklesIcon, UserIcon } from '@heroicons/react/outline'
import NavItem from './NavItem'
import Link from 'next/link'

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
            <Link href="/login">
                <a>
                    <NavItem title="USER" Icon={UserIcon} />
                </a>
            </Link>

        </div>
    );
}

export default Navbar;