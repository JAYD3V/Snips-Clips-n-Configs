export function wrapText(text:string, len = 90){
    const regex = new RegExp(`(.{1,${len - 1}}(?<=\\s))|(.{${len}})`,'g');

    let wrappedText = '';
    let m;

    while((m = regex.exec(text)) !== null) {
        if(m.index === regex.lastIndex) { regex.lastIndex++;}
        wrappedText += m[0] + '\n';
    }

    return wrappedText;
}
/*

***************************************************************************
                                    EXAMPLE
***************************************************************************/
const str =
'In publishing and graphic design, Lorem ipsum is a placeholder text '
+ 'commonly used to demonstrate the visual form of a document or a typeface without '
+ 'relying on meaningful content. Lorem ipsum may be used as a placeholder before '
+ 'the final copy is available. It is also used to temporarily replace text in '
+ 'a process called greeking, which allows designers to consider the form of a '
+ 'webpage or publication, without the meaning of the text influencing the design.';

const wrappedText80 = wrapText(str, 80);
const wrappedText120 = wrapText(str, 120);

console.log('WRAPPED TEXT 80:__________________________________________________________');
console.log(wrappedText80);

console.log('WRAPPED TEXT 120:_________________________________________________________');
console.log(wrappedText120);
// —
