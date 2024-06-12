const registration = () => {
  return (
    <div className="bg-white flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8">
        <div className="bg-form shadow-md rounded-md p-6">

            <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />

            <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                Registrese para obtener una cuenta
            </h2>


            <form className="space-y-6" method="POST">

                <div>
                    <label for="new-password" className="block text-sm font-medium text-gray-700">Nombre de Usuario</label>
                    <div className="mt-1">
                        <input name="username" type="username" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-ter focus:outline-none focus:ring-ter sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label for="password" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="mt-1">
                        <input name="email" type="email-address" autocomplete="email-address" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-ter focus:outline-none focus:ring-ter sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label for="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                    <div className="mt-1">
                        <input name="password" type="password" autocomplete="password" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-ter focus:outline-none focus:ring-ter sm:text-sm" />
                    </div>
                </div>

                <div>
                    <label for="password" className="block text-sm font-medium text-gray-700">Confirmar Contraseña</label>
                    <div className="mt-1">
                        <input name="confirm_password" type="password" autocomplete="confirm-password" required
                            className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-ter focus:outline-none focus:ring-ter sm:text-sm" />
                    </div>
                </div>

                <div>
                    <button type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-cuar hover:bg-ter hover:text-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75  focus:ring-2">Registrarse
                        </button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default registration