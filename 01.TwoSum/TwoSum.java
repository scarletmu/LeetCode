//Simple Solution : 78ms
public class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        for(int i = 0; i < nums.length; i++){
            if(i != nums.length - 1){
                for(int j = i + 1; j < nums.length; j++){
                    if(nums[i] + nums[j] == target){
                        result = new int[]{i, j};
                    };
                };
            };
        };
        return result;
    }
}

//use HashMap : 8ms
public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
            int delta = target - nums[i];
            if(map.containsKey(delta)){
                return new int[]{map.get(delta), i};
            }else{
                map.put(nums[i],i);
            }
        };
        return new int[2];
    }
}
