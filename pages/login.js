import Link from 'next/link';

export default function Login() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Login</h1>
      <form>
        <div>
          <label htmlFor="email" className="block mb-2">Email:</label>
          <input type="email" id="email" name="email" required className="border rounded p-2 mb-4 w-full" />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2">Password:</label>
          <input type="password" id="password" name="password" required className="border rounded p-2 mb-4 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2">Login</button>
      </form>
      <p className="mt-4">Don't have an account? <Link href="/register" className="text-blue-500">Register here</Link></p>
      <div className="mt-4 p-5 bg-gray-200">
        {/* Placeholder for logo */}
        Logo
      </div>
    </div>
  );
}
