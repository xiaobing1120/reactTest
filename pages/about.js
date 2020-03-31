//import Nover from '@/components/novelPage'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class About extends React.Component{
    render(){
        const codeString = '(num) => num + 1';
        return (
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeString}
          </SyntaxHighlighter>
        );
    }
  
};

export default About;

// class About extends React.Component {
//     render() {
//         return (
//             <div>
//                 About123456
//             </div>
//         );
//     }
// };
//