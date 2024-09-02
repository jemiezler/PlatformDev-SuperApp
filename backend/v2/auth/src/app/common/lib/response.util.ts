export enum ResponseMethod {
  findOne = 'findOne',
  findAll = 'findAll',
  create = 'create',
  update = 'update',
  remove = 'remove',
}

export type ResponseParamsMap = {
  [ResponseMethod.findOne]: { id: string };
  [ResponseMethod.update]: { id: string };
  [ResponseMethod.remove]: { id: string };
};

export type ExtractResponseMethod<T extends ResponseMethod> =
  T extends keyof ResponseParamsMap ? ResponseParamsMap[T] : never;
