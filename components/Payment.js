import {useEffect,useState} from 'react'
import { getProgramInstance } from '../utils/utils'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { SOLANA_HOST } from '../utils/const'
import { useWallet } from '@solana/wallet-adapter-react'
import { PublicKey } from '@solana/web3.js'
import  HomePage  from '../pages/homepage'


const anchor = require('@project-serum/anchor')

const { web3 } = anchor
const { SystemProgram } = web3
const utf8 = anchor.utils.bytes.utf8


const defaultAccounts = {
  tokenProgram:TOKEN_PROGRAM_ID,
  clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
  systemProgram: SystemProgram.programId,
 }

const styles = {
main: `w-screen h-screen bg-white text-black flex flex-col items-center`,
text: `w-64 text-center text-xl p-4 m-4 font-bold`,
buttons: `text-white`,
button: `bg-[#22c55e] p-4 m-4 font-bold rounded-md hover:bg-[#18a34c]`,
isConnectedButton: `flex flex-col items-end w-full pb-32`,
payment:`flex  flex-col items-center justify-center h-full`,
disconnect:`bg-[#eb4034] p-2 mr-6 font-bold text-sm rounded-md hover:bg-[#ba1a1a] text-gray-200`
}
export const Payment = () => {

  const wallet = useWallet();
  const connection = new anchor.web3.Connection(SOLANA_HOST);
  const program = getProgramInstance(connection,wallet);
  const [payers, setPayers] = useState([]);
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
      if(wallet.connected) getAllWallets()
  }, [wallet.connected,isPaid])


  const PK = JSON.stringify(wallet.publicKey).replace('"', '').replace('"', '')
  let first = PK.substring(0,5)
  let last = PK.substring(PK.length - 4, PK.length)
  const short = first + `...` + last  
  
  const [status,setStatus] = useState("Verify Payment")

  const getAllWallets = async () => {
    const payerList = await program.account.payerAccount.all()
    setPayers(payerList)
    console.log("getallwalletsworking")

    payerList.forEach(payer=>{
      if(payer.account.wallet.toBase58() == wallet.publicKey.toBase58()){
      setIsPaid(true)}
    })
    console.log(isPaid)
    payers.forEach((e)=>console.log(JSON.stringify(e.account)))
  }
  const onEvent = async ()=> {
    let myInterval = setInterval(()=>getAllWallets(),500)
    setStatus("Checking...")
    setTimeout(()=>clearInterval(myInterval),9000)
    setTimeout(()=>setStatus("Access Denied."),9500)
    setTimeout(()=>setStatus("Verify Payment"),10000)
  }


  const payClicked = async () => {
    let [payerSigner] = await anchor.web3.PublicKey.findProgramAddress(
      [utf8.encode('payer'), wallet.publicKey.toBuffer()],
      program.programId,
    )
    let payerInfo
    try {
      payerInfo = await program.account.payerAccount.fetch(payerSigner)
    } catch (e) {
      try {
        await program.rpc.acceptPayment({
          accounts: {
            payerWallet: payerSigner,
            receiver: new PublicKey(
              'Gdrc22r4dgMuw7jP7pnZMzFFDXTZikDx8obDt1iUdaVH',
            ),
            authority: wallet.publicKey,
            ...defaultAccounts,
          },
        })
        alert('Transaction successful.')
      } catch (e) {
        alert(e.message)
      }
    }
  }

  const disconnectWallet = async()=>{
    wallet.disconnect();
  }

  if (isPaid) return <HomePage PK={short}/>

  return (
    <div className={styles.main}>
      <div className={styles.isConnectedButton}>
        <button className={styles.button}>{wallet.connected ? short : `No Wallet Connected`}</button> 
        <button className={styles.disconnect} onClick={disconnectWallet}>Disconnect</button>     
      </div>
      <div className={styles.payment}>
      <div class="max-w-7xl mx-auto">
            <div class="relative group">
              <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative px-4 py-3 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex flex-col items-top items-center space-x-6">
                <p className={styles.text}>Pay For Full Access</p>
                <div className={styles.buttons}>
                  <button className={styles.button}
                  onClick={payClicked}>
                  Pay 0.1 Sol
                  </button>
                  <button className={styles.button}
                  onClick={onEvent}>
                    {status}
                  </button> 
                </div>
              </div>
            </div>
      </div> 
      </div>
      
    </div>
  )
}