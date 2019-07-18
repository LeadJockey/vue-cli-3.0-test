export function* iterator(limit){
  for(let i=0; i<limit; i++){
    yield i
  }
}

export function* map(iterator, cb){
  for(const each in iterator){
    yield cb(each)
  }
}