import React from 'react';

const List = ({list,handleItemDel,type,handleItemRecovery})=>
    <div className="list">
        {
            list.map(data => [
                type === 0 ?
                    <li key={data.id}>
                        {data.title}
                        {
                            data.status === 1 ?
                                <button onClick={() => handleItemDel(data.id)} className="del">删除</button>
                                :
                                <button onClick={() => handleItemRecovery(data.id)} className="recovery">恢复</button>
                        }
                    </li>
                    :
                    type === 1 && data.status === 1 ?
                        <li key={data.id}>
                            {data.title}
                            <button onClick={() => handleItemDel(data.id)}  className="del">删除</button>
                        </li>
                        :
                        type === 2 && data.status === 0 ?
                            <li key={data.id}>
                                {data.title}
                                <button onClick={() => handleItemRecovery(data.id)}  className="recovery">恢复</button>
                            </li>
                            :
                            null
            ])
        }
    </div>;
    export default List;