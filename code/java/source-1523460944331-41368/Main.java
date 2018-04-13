import java.io.*;
import java.util.*;

class Main{
    public static void main(String args[]){
    Scanner sc = new Scanner(System.in);
    String s = sc.next();
    System.out.println(s);
    String a[] = s.split(" ");
    for(int i=0;i<a.length;i++){
    System.out.println(a[i]);    
    }
    
    }
}