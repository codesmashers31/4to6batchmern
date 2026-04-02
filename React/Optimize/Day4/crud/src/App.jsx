import { useEffect, useState } from "react"

const App = () => {
  const [formData, setFromData] = useState({ id: null, name: "", mobile: "", email: "" })
  const [data, SetData] = useState([])
  const [editId, setEditId] = useState(false)

  useEffect(() => {
    const storedData = localStorage.getItem("register")
    if (storedData) {
      const parsed = JSON.parse(storedData)
      if (Array.isArray(parsed)) {
        SetData(parsed)
      }
    }
  }, [])

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleAdd = (e) => {
    e.preventDefault()

    const newUser = {
      ...formData,
      id: Date.now(),
    }

    const adduser = [...data, newUser]
    SetData(adduser)
    localStorage.setItem("register", JSON.stringify(adduser))
    setFromData({ id: null, name: "", mobile: "", email: "" })
    alert("Successfully added.")
  }

  const handleEdit = (users) => {
    setFromData(users)
    setEditId(users.id)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const updateData = data.map((items) => (items.id === formData.id ? formData : items))

    SetData(updateData)
    localStorage.setItem("register", JSON.stringify(updateData))
    setFromData({ id: null, name: "", mobile: "", email: "" })
    setEditId(false)
    alert("Updated data successfully.")
  }

  const handleDelete = (user_id) => {
    const filtered = data.filter((e) => e.id !== user_id)
    SetData(filtered)
    localStorage.setItem("register", JSON.stringify(filtered))
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-200/70">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-600">User CRUD</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Simple Tailwind Registration</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-500">Add users with a polished form and manage the list in a responsive table.</p>
          </div>

          <form className="grid gap-4 rounded-3xl bg-slate-50 p-6 shadow-inner shadow-slate-100 md:grid-cols-[1fr_1fr_1fr_auto]">
            <input
              onChange={handleChange}
              value={formData.name}
              name="name"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              type="text"
              placeholder="Enter name"
            />
            <input
              onChange={handleChange}
              type="tel"
              name="mobile"
              value={formData.mobile}
              placeholder="Enter mobile"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter email"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            <div className="flex items-end">
              {editId ? (
                <button
                  onClick={handleUpdate}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={handleAdd}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-200/70">
          <div className="border-b border-slate-200 px-6 py-5">
            <h2 className="text-lg font-semibold text-slate-900">Registered Users</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50 text-left text-xs uppercase tracking-[0.18em] text-slate-500">
                <tr>
                  <th className="px-6 py-3">S.no</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Mobile</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {data.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-10 text-center text-sm text-slate-500">
                      No records found. Add a user to see it here.
                    </td>
                  </tr>
                ) : (
                  data.map((e, i) => (
                    <tr key={e.id} className="transition hover:bg-slate-50">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">{i + 1}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">{e.name}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">{e.mobile}</td>
                      <td className="px-6 py-4 text-sm text-slate-700">{e.email}</td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => handleEdit(e)}
                            className="rounded-2xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(e.id)}
                            className="rounded-2xl bg-rose-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-rose-600"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
