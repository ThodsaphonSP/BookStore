
function Footer() {
    return (
        <div>
            <hr/>
            <div className="p-4 text-center footer" id="section-contact">
                <h3><i className='bx bx-white bxs-message-detail display-4' ></i> ติดต่อเรา</h3>
                {/*<h4><span>สำนักงานสถิติแห่งชาติ</span></h4>*/}
                {/*<span><i className='bx bx-white bxs-building-house'></i> ศูนย์ราชการเฉลิมพระเกียรติ 80 พรรษา</span>*/}
                {/*<br />*/}
                {/*<span>อาคารรัฐประศาสนภักดี ชั้น 2 ถนนแจ้งวัฒนะ เขตหลักสี่ กรุงเทพมหานคร 10210</span>*/}
                {/*<br />*/}
                {/*<span><i className='bx bx-white bxs-phone-call'></i> โทรศัพท์สายตรง : 021421265-67  </span>*/}
                {/*<br />*/}
                {/*<span><i className='bx bx-white bxs-chat' ></i> ข้อเสนอแนะ-ปัญหาการใช้งานระบบ : eagrcult@gmail.com</span>*/}
                {/*<br />*/}
                {/*<EnvLabel></EnvLabel>*/}
                
            </div>
        </div>
    );
}

// const EnvLabel = () => {
//     const env: string = process.env.REACT_APP_NAME ?? "";
//    
//     switch (env) {
//         case "test":
//             return (
//                 <span className="badge bg-label-info me-4">TEST-UAT-SEMINAR {generatedGitInfo.gitBranch}-{generatedGitInfo.gitCommitHash}</span>
//             );
//         case "prod":
//             return <span className="badge bg-label-success me-4">PRODUCTION {generatedGitInfo.gitBranch}-{generatedGitInfo.gitCommitHash}</span>;
//         default:
//             return (
//                 <span className="badge bg-label-secondary me-4">{env.toUpperCase()} {generatedGitInfo.gitBranch}-{generatedGitInfo.gitCommitHash}</span>
//             );
//     }
// };

export default Footer;