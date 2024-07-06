import { FakeProducts } from "../../Util/FakeProducts"
import { LineChart, Line, CartesianGrid, Tooltip, YAxis, XAxis, Legend, ResponsiveContainer } from 'recharts';
export default function NewLineChart(){
return (
    <ResponsiveContainer width="100%" height="100%">
        <h1 className="text-center">Average price</h1>
        <LineChart data={FakeProducts}>
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <YAxis dataKey="price"/>
            <Tooltip />
            <Legend />
        </LineChart>
    </ResponsiveContainer>
)
}