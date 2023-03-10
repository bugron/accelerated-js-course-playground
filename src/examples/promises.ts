function doWorkAsync(threshold: number, callbackFn: (error: Error | null, value: string | null) => void) {
  setTimeout(() => {
    if (Math.random() < threshold) {
      callbackFn(null, 'success');
    } else {
      callbackFn(new Error('exceeded the threshold'), null)
    }
  }, 2000);
}

function doWorkPromisified(threshold: number) {
  return new Promise((resolve, reject) => {
    doWorkAsync(threshold, (error, value) => {
      if (error) {
        return reject(error);
      }

      resolve(value);
    });
  })
}

doWorkPromisified(0.7)
  .then(value => {
    console.log('promise success', value);

    return doWorkPromisified(0.5);
  })
  .catch(error => {
    console.error('promise error1', error)

    throw error;
  })
  .then(value => {
    console.log('promise success1', value);

    return doWorkPromisified(0.4);
  })
  .then(value => {
    console.log('promise success2', value);
  })
  .catch(error => console.error('promise error', error))

doWorkAsync(0.7, (error, value) => {
  if (error) {
    return console.error(error);
  }

  console.log('the success message: ', value);

  doWorkAsync(0.5, (error1, value1) => {
    if (error1) {
      throw error1;
    }

    console.log('the success message1: ', value);

    doWorkAsync(0.4, (error2, value2) => {
      if (error2) {
        throw error2;
      }
  
      console.log('the success message2: ', value);
    });
  });
})

Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  // Promise.reject(new Error('hello')),
  Promise.resolve(3),
])
  .then(value => console.log(value))
  .catch(error => console.error('Promise.all is rejected', error));

Promise.race([
  fetch('/server1'), // rejects
  fetch('/server2'), // rejects
  fetch('/server3'), // rejects
  fetch('/server4'), // rejects
  fetch('/server5'), // rejects
])
  .then(value => console.log(value))
  .catch(error => console.error('Promise.race is rejected', error));

Promise.allSettled([
  12,
  'hello',
  { key: 'value' },
  Promise.reject(new Error('hello2')),
])
  .then(values => console.log(values))
  .catch(error => console.error('Promise.allSettled is rejected', error)); // never executes