const pi =[
    {
    id:1,
    num:684,
    pere:'kjuuyyl'

},
{
    id:2,
    num:684,
    pere:'kjuuyyl'

},
{
    id:3,
    num:684,
    pere:'kjuuyyl'

},
{
    id:4,
    num:684,
    pere:'kjuuyyl'

},

]
pi.map((item)=>(<div key={item.id}>
    <h3>{item.num}</h3>
    <p>{item.pere}</p>
    </div>))