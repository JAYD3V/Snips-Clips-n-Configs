/**
 * @file "lib/src/callsites.mts"
 * @fileoverview Contains a class that is an abstract container for the Native annexed
 * from the V8 JavaScript engine via the `Error.prepareStackTrace` "Error Class-method".
 * @author A. Jay Chambers
 * @JAYD3V
 * */

/** #### CallSites Type (Defined "@types/node")
 * ___________________________________________________________________________
 *
 * CallSite is defined as a **global** in @types/node, consequently;
 * eslint is not going to be happy with the use of `NodeJS.CallSite`
 * unless the namespace: `NodeJS` & the interface `CallSite` are both
 * defined as globals in your `eslintrc.*` file, or the ESLint rule,
 * `"no-undef"`, is deactivated. If `CallSites` will be used, instead of
 * CallSite[], then CallSites will need to be defined as a global in your
 * `eslintrc.*` file.
 * ___________________________________________________________________________*/
declare type CallSite = NodeJS.CallSite;

type CallSiteObj = {
  col: number;
  line: number;
  file: string;
  fnName: string;
  mtdName: string;
  isCtor: boolean;
  isTopLv: boolean;
  isNative: boolean;
  isEval: boolean;
  evalLoc: string;
  _Function_: Function | undefined;
  _this_: unknown;
};

export class Exception{
  private stack?: unknown;
  private _callSites: CallSite[]; // Has an uppercase 'S' & isPrivate
  callsites: CallSites; // all lowercase & isPublic
  stackTrace: string;

  constructor(){
    const resetStackTrace = CallSites.annexCallSites(this, Exception);

    this._callSites = this.stack as CallSite[];
    this.callsites = new CallSites(this._callSites);

    resetStackTrace(this, Exception);

    this.stackTrace = this.stack as string;
  }
}

export class CallSites extends Array<CallSiteObj>{
  private filtered: CallSiteObj[];

  constructor(callsites: CallSite[], filter?: Function){
    super();

    callsites.forEach((callsite: CallSite) => {
      this.push({
        col:        callsite.getColumnNumber() ?? 0,
        line:       callsite.getLineNumber() ?? 0,
        file:       callsite.getFileName() ?? '',
        fnName:     callsite.getFunctionName() ?? '',
        mtdName:    callsite.getMethodName() ?? '',
        evalLoc:    callsite.getEvalOrigin() ?? '',
        isCtor:     callsite.isConstructor(),
        isTopLv:    callsite.isToplevel(),
        isNative:   callsite.isNative(),
        isEval:     callsite.isEval(),
        _Function_: callsite.getFunction(),
        _this_:     callsite.getThis()
      });
    });

    this.filtered = this.filterInternalNodejsCallSites();
  }

  static annexCallSites(target: object, ctor?: Function){
    const defaultV8Format = Error.prepareStackTrace;

    Error.prepareStackTrace = (e, callsites) => callsites;
    Error.captureStackTrace(target, ctor);

    return (target: object, ctor?: Function) => {
      Error.prepareStackTrace = defaultV8Format;
      Error.captureStackTrace(target, ctor);
    };
  }

  filterInternalNodejsCallSites(){
    const csDataArr: CallSiteObj[] = [];

    this.forEach((callsite) => {
      if (callsite.file.startsWith('file:///')){
        csDataArr.push(callsite);
      }
    });

    return csDataArr;
  }

  print(){
    this.forEach((callsite, i) => {
      console.log('\n\nCALLSITE-@-INDEX #%d', i);
      console.table(callsite);
    });

    console.log('\n');
  }
}
