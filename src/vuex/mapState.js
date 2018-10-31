import { mapState } from 'vuex';

// mapState
// store에 있는 변수들을 enum처럼 상수로 사용
// 대규모 일때만 사용한다!

export default {
  // computed: mapState({
  //   count: state => state.count,
  //   countAlias: 'count'
  // })
  computed: {
    ...mapState(['name'])
  }
};
