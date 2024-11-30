
const Footer = ({ layoutPaddings }: { layoutPaddings: string }) => {
    return (
        <footer className={`${layoutPaddings} bg-yellow-400 h-10 content-center flex-grow  text-center`}>
            &copy; 2024. All rights reserved.
        </footer>
    )
}

export default Footer