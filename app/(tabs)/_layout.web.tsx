import { Link, Slot } from "expo-router";

export default function TabLayoutWeb() {
    return (
        <>
            <div className="bg-white w-full p-4 flex gap-4 items-center">
                <h1 className="font-bold">ECGlobal</h1>
                <div className="flex flex-1 gap-4">
                    <Link
                        href="/"
                        className="hover:bg-neutral-200 bg-transparent transition-colors p-2 rounded-md"
                    >
                        Postagens
                    </Link>
                    <Link
                        href="/members"
                        className="hover:bg-neutral-200 bg-transparent transition-colors p-2 rounded-md"
                    >
                        Membros
                    </Link>
                </div>
            </div>
            <div className="flex overflow-y-auto w-full justify-center h-full">
                <div className="max-w-5xl w-full">
                    <Slot />
                </div>
            </div>
        </>
    );
}
