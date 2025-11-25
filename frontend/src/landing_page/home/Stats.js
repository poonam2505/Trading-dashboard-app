import React from 'react';
function Stats() {
    return (  
       <div className='container p-3'>
        <div className='row p-5'>
            <div className='col-6 p-5'>
                <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                <h2 className='fs-4'>Customer-frirst always</h2>
                <p className='text-muted'>That's why 1.3+crore customers trust Zerodha with $3.5+lakh crore worth of quality investments</p>

                <h2 className='fs-4'>No spam or gimmicks</h2>
                <p>No gimmicks,span,"gamification",or ayyoying opush notification.high quality that you use at your pace the way you like</p>

                <h2 className='fs-4'>The Zerodha universe</h2>
                <p className='text-muted'>Not just an app,but a whole ecosystem.Our investments in 30+ fintech startup offer you tailored service specific to your needs</p>

                <h2 className='fs-4'>Do better with money</h2>
                <p className='text-muted'>With initiatives like Nudge and kil switch,we don't just facilite transaction,but actively help you do better with your money</p>
            </div>
            <div className='col-6 p-5'>
                <img src='media/images/ecosystem.png'style={{width:"90%"}}></img>
                <div className='text-center'>

                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <a href='' style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>

            </div>
        </div>
       </div>
    );
}

export default Stats;