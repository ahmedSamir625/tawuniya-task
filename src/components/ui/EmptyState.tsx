const EmptyState = ({ message }: { message: string }) => {
    return (
        <div className="flex justify-center m-auto py-10 items-center">
            <h1 className="text-2xl font-bold text-slate-700">{message}</h1>
        </div>
    )
}

export default EmptyState