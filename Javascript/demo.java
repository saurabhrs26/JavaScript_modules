import java.util.Arrays;
import java.util.Scanner;

public class demo {
    // public static void main(String[] args) {
        // 1 3 4 5 -----> 5 1 3 4
        // System.out.println("Enter the size of array:");
        // Scanner sc=new Scanner(System.in);
        // int len=sc.nextInt();
        
        // System.out.println("Enter the element:");
        // for(int i=0;i<len;i++)
        // {
        //    arr[i]=sc.nextInt();

        // }
        // System.out.println("Array is:");
        // for(int i=0;i<len;i++)
        // {
        //     System.out.print(arr[i]+" ");
        // }
       
        // int[] arr={1,2,3,4,5};
        // int len=arr.length;
        // int temp=arr[len-1];
        // for(int i=len;i>1;i--)
        // {
        //     arr[i-1]=arr[i-2];
        // }
        // arr[0]=temp;
        // System.out.println(" Rotated Array is:");
        // for(int i=0;i<len;i++)
        // {
        //     System.out.print(arr[i]+" ");

        // }
        // System.out.println(" ");
        // int[] arr={1,2,3,4,5};
        // int i=0;
        // int temp=arr[0];
        // for(i=0;i<arr.length-1;i++)
        // {
        //   arr[i]=arr[i+1];
        // }
        // arr[arr.length-1]=temp;
        // for(i=0;i<arr.length;i++)
        // {
        //     System.out.println(arr[i]);
        // }
        // int[] arr={4,23,1,3,5};
        // Arrays.sort(arr);
        // for(int i=0;i<arr.length;i++)
        // {
        //     System.out.println(arr[i]);
        // }
        public static void main(String[] args) {
        String originalStr = "Hello";
        int len=originalStr.length();
    char[] reversedStr = new char[len];
    int j=0;
    System.out.println("Original string: " + originalStr);
        
   for(int i=len-1;i>=0;i--)
   {
      reversedStr[j]=originalStr.charAt(i);
      j++;
   }
   String rev=new String(reversedStr);

    
    System.out.println("Reversed string: "+ rev);
    }
}
