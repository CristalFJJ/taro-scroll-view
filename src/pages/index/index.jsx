import { useState, useEffect, useCallback } from 'react';
import { View, ScrollView  } from "@tarojs/components";
import './index.scss';

function Demo () {
  const [scrollToId, setScrollToId] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([...new Array(10).keys()]);
  }, [])

  const add = useCallback(() => {
    let id = list.length;
    setList([...list, id]);
    scrollToBottom(id);
  }, [list])

  const scrollToBottom = useCallback((id) => {
    setTimeout(() => {
      setScrollToId(`item-${id}`)
    }, 0)
  }, [])

  return (
    <View className='demo'>
      <View className='title'>滚动demo</View>
      <View className='content'>
        <ScrollView
          className={'scroll'}
          scrollY
          scrollIntoView={scrollToId}
        >
          {
            list.map(id => (
              <View id={`item-${id}`} className={'item'} key={id}>列表：{id}</View>
            ))
          }
        </ScrollView>
      </View>
      <View className='btn' onClick={add}>添加+</View>
    </View>
  )
}

export default Demo;
