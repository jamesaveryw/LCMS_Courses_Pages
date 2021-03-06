// <auto-generated />
using LCMS.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace LCMS.Data.Migrations
{
    [DbContext(typeof(LCMSContext))]
    [Migration("20211012123101_InitialDB")]
    partial class InitialDB
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("LCMS.Domain.Course", b =>
                {
                    b.Property<int>("Crs_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Crs_Blurb")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Crs_Number")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Crs_Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Crs_Type")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Crs_Id");

                    b.ToTable("Courses");
                });

            modelBuilder.Entity("LCMS.Domain.CoursePage", b =>
                {
                    b.Property<int>("Crs_Id")
                        .HasColumnType("int");

                    b.Property<int>("Pg_Id")
                        .HasColumnType("int");

                    b.Property<int>("CP_Order")
                        .HasColumnType("int");

                    b.HasKey("Crs_Id", "Pg_Id");

                    b.HasIndex("Pg_Id");

                    b.ToTable("CoursesPages");
                });

            modelBuilder.Entity("LCMS.Domain.Page", b =>
                {
                    b.Property<int>("Pg_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Pg_Content")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pg_Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Pg_Id");

                    b.ToTable("Pages");
                });

            modelBuilder.Entity("LCMS.Domain.CoursePage", b =>
                {
                    b.HasOne("LCMS.Domain.Course", "Course")
                        .WithMany("Crs_CoursesPages")
                        .HasForeignKey("Crs_Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("LCMS.Domain.Page", "Page")
                        .WithMany("Pg_CoursesPages")
                        .HasForeignKey("Pg_Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Course");

                    b.Navigation("Page");
                });

            modelBuilder.Entity("LCMS.Domain.Course", b =>
                {
                    b.Navigation("Crs_CoursesPages");
                });

            modelBuilder.Entity("LCMS.Domain.Page", b =>
                {
                    b.Navigation("Pg_CoursesPages");
                });
#pragma warning restore 612, 618
        }
    }
}
