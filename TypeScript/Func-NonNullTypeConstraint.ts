type NonNullable<T> = T extends null | undefined ? never : T;

function assertNonNullish<T>(
  val: T,
  mesg: string
): asserts val is NonNullable<T> {

  if (val === null || val === undefined) {
    throw Error('value undefined!\n\n' + mesg);
  }
}

function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
    if (val === undefined || val === null) {
        throw new AssertionError(`Expected a defined val, but received ${val}`);
    }
}
