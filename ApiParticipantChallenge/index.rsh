'reach 0.1';
//Deployer
// Only D ready
//Api
//Creating user
//UserArray

//PR
//increment new user
//increment <= 5
export const main = Reach.App(() => {
    setOptions({ untrustworthyMaps: true });
    const Alice = Participant("Alice", {
        ready : Fun([Contract],Null),
        end   : Fun([],Null),
        finish: Fun([],Null)
    })
    const AApi = API("AApi",{
        endAdmission : Fun([Bool],Bool)
    })
    const UApi = API("UApi",{
        addUser:Fun([],Tuple(Bool,UInt))
    })
    init()
    Alice.only(()=>{
        const AA = this
    })

    Alice.publish(AA)
    Alice.only(()=>{
        interact.ready(getContract())
    })
    const userSet = new Set()

    const [howMany,isFull] = parallelReduce([ 0, false ])
      .invariant(balance() == 0)
      .while(!isFull)
      .api(AApi.endAdmission,
        ((bl) => assume(AA == this, "Only the admin can call this") ),
        ((bl) => 0),
        ((bl,fb) => {
            require(AA == this, "Only the admin can call this")
            fb(true)
            return[howMany,bl]
        }))
      .api(UApi.addUser,
        (()=> assume(howMany <= 4,"The member list is full")),
        (()=>0),
        ((fn)=>{
            require(howMany <= 4,"The member list is full")
            if(!userSet.member(this)){
                userSet.insert(this)
                fn([true ,howMany])
                if(howMany + 1 == 5){
                    Alice.interact.end()
                }
                return [howMany + 1, false]
            }
            else{ 
                fn([false,howMany])
                return [howMany, true]
            }
        }))
    Alice.interact.finish()
    transfer(balance()).to(Alice)
    commit();
    exit();

})