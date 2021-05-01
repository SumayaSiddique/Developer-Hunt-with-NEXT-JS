const NavItem = ({ Icon, title }) => {
    return (
        <div className="flex flex-col px-5 group cursor-pointer items-center">
            <Icon className="h-8 group-hover:animate-bounce" />
            <p className="group-hover:opacity-80 opacity-0">{title}</p>
        </div>
    );
}

export default NavItem