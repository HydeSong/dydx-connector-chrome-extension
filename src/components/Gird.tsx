import React from 'react'

const Gird = () => {
    return (
        <form className='w-full padding-x padding-y flex flex-col'>
            <div>
                <h5>1.价格区间</h5>
                <input type="text" placeholder='最低价格' className='h-10 w-1/2'/>
                <input type="text" placeholder='最高价格' className='h-10 w-1/2'/>
            </div>

            <div className='mt-5'>
                <h5>2.网格数量</h5>
                <input type="text" placeholder='网格数量' className='h-10 w-full'/>
            </div>

            <div className='mt-5'>
                <h5>3.投资额（保证金）</h5>
                <input type="text" placeholder='投资额（保证金）' className='h-10 w-full'/>
            </div>

            <div className='mt-5'>
                <h5>
                    高级（可选）
                </h5>
                <h5>保证金模式</h5>
                <h5>网络触发</h5>
                <h5>终止触发</h5>
                <h5>终止时全部撤单</h5>
                <h5>终止时全部平仓</h5>
            </div>

        </form>
    )
}

export default Gird