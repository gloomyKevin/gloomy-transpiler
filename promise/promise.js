const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class Promise {
    // executor类型校验
    constructor(executor) {

    }
    this.state = PENDING
    const resolve = () => {
        if(this.state === PENDING) {
            this.state = FULFILLED
        }
    }
    const reject = () => {
        if(this.state === PENDING) {
            this.state = REJECTED
        }
    }
}