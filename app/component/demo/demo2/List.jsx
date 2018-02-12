import React from 'react';

const List = ({list,handleItemDel})=>
    <div className="list">
        {
            list.map(data=>[
                data.status === 1 ?
                    <li key={data.id}>
                        {data.title}
                        <button onClick={()=>handleItemDel(data.id)}>删除</button>
                    </li> : null
            ])
        }
    </div>;
    export default List;